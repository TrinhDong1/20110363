
let mygroup = [
    { id: '20110363', name: 'Trinh Van Dong' },
    { id: '19110122', name: 'Pham Quoc Thai' },
    { id: '20110397', name: 'Tran Anh Tai' },
  ];
  
  function findStudentById(id) {
    return mygroup.find((student) => student.id === id);
  }
  
  function isValidStudent(student) {
    return student.id && student.name;
  }
  
  function addStudent(student) {
    mygroup.push(student);
  }
  
  function getAllStudents() {
    return mygroup;
  }
  
  function getAllStudentNames() {
    return mygroup.map((student) => student.name);
  }
  
  module.exports = {
    findStudentById,
    isValidStudent,
    addStudent,
    getAllStudents,
    getAllStudentNames,
  };
  