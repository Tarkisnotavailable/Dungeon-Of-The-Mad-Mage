module.exports = async (tp) => {
    console.log("[AdvanceDay.js] Script started.");

    // Define file path
    const filePath = "Templates/CurrentDate.md";
    console.log(`[AdvanceDay.js] Looking for file: ${filePath}`);

    // Find the file
    const tfile = await tp.file.find_tfile(filePath);
    if (!tfile) {
        console.error("[AdvanceDay.js] File not found:", filePath);
        return;
    }
    console.log("[AdvanceDay.js] File found:", tfile.path);

    // Read the current date
    
    let currentDateString = await tp.app.vault.read(tfile);
    console.log("[AdvanceDay.js] Current date read:", currentDateString);

    
    // Parse current date
    currentDateString = currentDateString.replace(/---/g, ''); // Remove all ---
    currentDateString = currentDateString.replace('CurrentDate:', ''); // Remove label
    currentDateString = currentDateString.trim(); // Remove spaces
    console.log(currentDateString);
    let [year, month, day] = currentDateString.split('-').map(Number);
    console.log(`[AdvanceDay.js] Parsed date -> Year: ${year}, Month: ${month}, Day: ${day}`);

    // Increment day
    day += 1;
    if (day > 30) {
        day = 1;
        month += 1;
        if (month > 12) {
            month = 1;
            year += 1;
        }
    }
    console.log(`[AdvanceDay.js] New date -> Year: ${year}, Month: ${month}, Day: ${day}`);

    // Write new date
    const newDateString = `${year}-${month}-${day}`;
    //await tp.file.write(filePath, newDateString);
    await tp.app.fileManager.processFrontMatter(tfile, (frontmatter) => {
        frontmatter["CurrentDate"] = newDateString;
    });
    console.log(`[AdvanceDay.js] Wrote new date: '${newDateString}'`);

    // Call UpdateTime
    console.log("[AdvanceDay.js] Calling UpdateTime...");
    //await tp.user.UpdateTime();

    console.log("[AdvanceDay.js] Script finished.");
};
