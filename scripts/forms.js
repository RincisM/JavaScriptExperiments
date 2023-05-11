function generateForm() {
        const city = document.getElementById("citySelect").value;
        let maxItems;
        switch (city) {
          case "chennai":
            maxItems = 15;
            break;
          case "coimbatore":
          case "madurai":
            maxItems = 12;
            break;
          case "salem":
            maxItems = 8;
            break;
          case "tiruchirappalli":
            maxItems = 6;
            break;
          case "thoothukudi":
            maxItems = 2;
            break;
          default:
            maxItems = 0;
        }
        let formHtml = "<h2>Order Form for " + city + "</h2>";
        formHtml += "<p>Maximum items: " + maxItems + "</p>";
        formHtml += "<form>";
        for (let i = 1; i <= maxItems; i++) {
          formHtml += "<label>Item " + i + ": </label>";
          formHtml += "<input type='text' name='item" + i + "'><br>";
        }
        formHtml += "<input type='submit' value='Submit'>";
        formHtml += "</form>";
        document.getElementById("orderForm").innerHTML = formHtml;
      }