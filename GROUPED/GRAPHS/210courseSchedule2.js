// 210. Course Schedule II


var findOrder = function (numCourses, prerequisites) {
  const indegrees = new Array(numCourses).fill(0);
  prerequisites.forEach((prereq) => indegrees[prereq[0]]++);

  const queue = [];
  for (let course = 0; course < numCourses; course++) {
    if (indegrees[course] === 0) queue.push(course);
  }

  const courseSequence = [];

  while (queue.length) {
    let noPrereq = queue.shift();
    courseSequence.push(noPrereq);

    for (let [course, prereq] of prerequisites) {
      if (prereq === noPrereq) {
        indegrees[course]--;
        if (indegrees[course] === 0) queue.push(course);
      }
    }
  }

  return courseSequence.length === numCourses ? courseSequence : [];
};