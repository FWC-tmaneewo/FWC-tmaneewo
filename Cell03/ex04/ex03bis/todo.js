$(document).ready(function () {

  $("#newBtn").on("click", function () {
    create();
  });

  // Load existing todos stored in cookies on page load
  const existingCookies = document.cookie;

  if (existingCookies.length > 0) {
    const cookieList = existingCookies.split(";");

    cookieList.forEach(function (element) {
      const name = element.split("=")[0].trim();
      const text = element.split("=")[1];

      addTodoNode(name, text);
    });
  }
});

const create = () => {
  const txt = prompt("Please Enter TODO LIST :");

  if (!txt) {
    return;
  }

  const name = new Date().getTime();
  document.cookie = `${name}=${txt}`;

  addTodoNode(name, txt);
};

function addTodoNode(name, text) {
  const $node = $("<div></div>").html(text);

  $node.on("click", function () {
    const confirmed = confirm("Do you want to delete");

    if (confirmed) {
      $node.remove();
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    }
  });

  $("#ft_list").prepend($node);
}
