<%*
const moment = window.moment; // Use Obsidian's built-in moment.js
const file = await tp.file.find_tfile("CurrentDate");
const content = await app.vault.read(file);

// Extract the frontmatter date using a RegEx
const match = content.match(/in_game_date:\s*(\d{4}-\d{2}-\d{2})/);
if (!match) {
  tR = "❌ Could not find in_game_date in the file.";
} else {
  const oldDate = moment(match[1], "YYYY-MM-DD");
  const newDate = oldDate.add(1, 'day').format("YYYY-MM-DD");
  const updatedContent = content.replace(/in_game_date:\s*\d{4}-\d{2}-\d{2}/, "in_game_date: " + newDate);
  
  // Write the updated content back
  await app.vault.modify(file, updatedContent);
  tR = "✅ Date advanced to " + newDate;
  
  const updateTimeFile = app.vault.getAbstractFileByPath("Templates/UpdateTime.md");
  const updateTimeContent = await app.vault.read(updateTimeFile);
  //await app.plugins.plugins["templater-obsidian"].templater.current_functions.evaluate(updateTimeContent);
}
%>