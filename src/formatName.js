function formatName(firstName, lastName) {
    if (!firstName || !lastName) throw new Error("Both first and last name are required");
    return `${firstName.trim()} ${lastName.trim()}`;
  }
  
  module.exports = formatName;