export const submitPost = ({ description, title }) =>
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title.trim(),
      body: description.trim(),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());

export const fetchList = () =>
  fetch("https://jsonplaceholder.typicode.com/photos").then((response) =>
    response.json()
  );
