const student = {
  id: Date.now(),
  name: 'Alex',
  prefix: 'ale',
  status: 'active',

  getStatus: function() {
    return this.status;
  }
};

console.log(student);

const SNAPSHOT_STEP1 = `{
  "id": ${student.id},
  "name": "${student.name}",
  "prefix": "${student.prefix}",
  "status": "${student.status}",
  "getStatus": ${student.getStatus.toString()}
}`;


student.deactivate = function() {
  this.status = 'inactive';
};

student.deactivate();

console.log(student);

const SNAPSHOT_STEP2 = `{
  "id": ${student.id},
  "name": "${student.name}",
  "prefix": "${student.prefix}",
  "status": "${student.status}",
  "getStatus": ${student.getStatus.toString()},
  "deactivate": ${student.deactivate.toString()}
}`;