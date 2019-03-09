export default {
  getProjects(userid) {
    const url = `https://api.github.com/users/${userid}/repos`;
    return fetch(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error('Not found')
        }
        return response;
      })
      .then(response => response.json());
  },
}