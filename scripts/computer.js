const parts = [
      ["Monitors", "LCD Screens", "LED Screens", "Vibrant Colors"],
      ["Motherboards", "Fast"],
      ["Chips", "i9", "i7", "i5", "i3", "Core2Duo", "Pentium", "Very Fast"],
      ["Hard Drives", "2TB", "1TB", "100-500 GB", "Fast Reading"],
      ["DVD-ROMs", "Burn CDs", "Burn DVDs"],
      ["Cases", "ATX", "AT", "Mini", "Other Sizes", "Choice of Colors"],
      ["Power Supplies", "we can get one for any computer!"]
    ];

    function displayParts() {
      const list = document.getElementById("partsList");

      for (let i = 0; i < parts.length; i++) {
        const partName = parts[i][0];
        const partFeatures = parts[i].slice(1).join(", ");

        const listItem = document.createElement("li");
        listItem.innerHTML = `${partName}: ${partFeatures}`;
        list.appendChild(listItem);
      }
    }