$("document").ready(function () {
  const boo = async () => {
    const resp = await fetch("./interns.json");
    var data = await resp.json();
    console.log(data);
    for (i = 0; i <= 200; i++) {
      var a = i + 1;
      $("#table").html(
        $("#table").html() +
          `<tr>
                <th scope="row">` +
          a +
          `</th>
                <td>` +
          data[i].fullName +
          `</td>
                <td>` +
          data[i].userName +
          `</td>
                <td>` +
          data[i].email +
          `</td>
                <td>` +
          data[i].totalPoints +
          `</td>
                </tr>
                `
      );
    }
  };
  boo();
  //   $("document").on("ajaxStart", () => {
  //     alert("...Loading");
  //   });
  //   $("document").on("ajaxComplete", () => {});
});
