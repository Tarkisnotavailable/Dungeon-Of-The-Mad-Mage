module.exports = async (tp) => {
    console.log("[UpdateTime.js] Script started.");
  
    const itemsFolder = "Items"; // <- Change if your items are elsewhere
    console.log(`[UpdateTime.js] Getting files in folder: ${itemsFolder}`);
  
    const items = await tp.file.find_tfiles(itemsFolder);
    console.log(`[UpdateTime.js] Found ${items.length} item files.`);
  
    // Read current date
    const filePath = "Templates/CurrentDate.md";
    let currentDateString = await tp.file.read(filePath);
    currentDateString = currentDateString.trim();
    let [year, month, day] = currentDateString.split('.').map(Number);
    console.log(`[UpdateTime.js] Current date -> Year: ${year}, Month: ${month}, Day: ${day}`);
  
    const currentDays = year * 360 + (month - 1) * 30 + day;
    console.log(`[UpdateTime.js] Current total days: ${currentDays}`);
  
    for (let item of items) {
      console.log(`[UpdateTime.js] Reading item: ${item.path}`);
      let content = await tp.file.read(item.path);
  
      if (content.includes("canAge: true")) {
        console.log(`[UpdateTime.js] Item '${item.path}' can age.`);
  
        const match = content.match(/dateCreated:\s*(\d+\.\d+\.\d+)/);
        if (!match) {
          console.warn(`[UpdateTime.js] No dateCreated found in '${item.path}'. Skipping.`);
          continue;
        }
  
        const [createdYear, createdMonth, createdDay] = match[1].split('.').map(Number);
        const createdDays = createdYear * 360 + (createdMonth - 1) * 30 + createdDay;
        const age = currentDays - createdDays;
  
        console.log(`[UpdateTime.js] Item '${item.path}' age calculated: ${age} days.`);
  
        // Replace or insert age property
        if (content.includes("age:")) {
          content = content.replace(/age:\s*\d+/, `age: ${age}`);
        } else {
          content += `\nage: ${age}`;
        }
  
        await tp.file.write(item.path, content);
        console.log(`[UpdateTime.js] Updated '${item.path}' with age: ${age}`);
      } else {
        console.log(`[UpdateTime.js] Item '${item.path}' does not have canAge: true. Skipping.`);
      }
    }
  
    console.log("[UpdateTime.js] Script finished.");
  }
  