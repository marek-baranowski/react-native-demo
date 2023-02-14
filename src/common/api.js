export const submitPost = ({ description, ...rest }) =>
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      ...rest,
      body: description,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());

export const fetchList = () =>
  fetch("https://jsonplaceholder.typicode.com/photos").then((response) =>
    response.json()
  );
