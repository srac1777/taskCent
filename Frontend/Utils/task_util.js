export const createTask = (task) => {
  let task = task
  return $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: {
      raw_project
    }
  })
}

export const fetchProjects = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/projects',
  })
}

export const createTask = (task) => {
  let task = task
  return $.ajax({
    method: 'GET',
    url: '/api/projects',
    data: {
      raw_project
    }
  })
}