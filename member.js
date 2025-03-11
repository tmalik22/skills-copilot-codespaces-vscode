function skillsMember() {
  return {
    name: 'John Doe',
    age: 30,
    skills: ['JavaScript', 'React', 'NodeJS'],
    // Method
    getSkills: function() {
      return this.skills;
    }
  }
}