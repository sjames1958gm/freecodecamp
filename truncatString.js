function truncateString(str, num) {
  // Clear out that junk in your trunk
  return (str.length <= num ? str : 
          (num <= 3 ? str.slice(0, num) + '...' : str.slice(0, num - 3) + '...'));
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
