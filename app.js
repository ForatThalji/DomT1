// const fruits =["A","B","C","D","E"];
// // const fruits = ['apple', 'banana', 'cherry', 'grape', 'orange'];
        
// // عنصر div الذي سيتم إضافة قائمة الفواكه له
// const fruitListDiv = document.getElementById('fruit-list');

// // إنشاء عنصر ul
// const ul = document.createElement('ul');

// // إضافة عناصر li و img لكل فاكهة في المصفوفة باستخدام حلقة for
// for (let i = 0; i < fruits.length; i++) {
//     const li = document.createElement('li');
//     const img = document.createElement('img');
//     img.src = `assets/${fruits[i]}.jpg`; // تأكد من أن مسار الصور صحيح
//     img.alt = fruits[i];
//     img.style.width = "100px"; // تعيين العرض للصورة
//     img.style.height = "100px";    li.appendChild(img);
//     li.appendChild(document.createTextNode(fruits[i]));
//     ul.appendChild(li);
// }

// // إضافة عنصر ul إلى div
// fruitListDiv.appendChild(ul);



function findIndex(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i; 
        }
    }
    return -1; 
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];
console.log(findIndex(numbers, 3)); 
console.log(findIndex(numbers, 6)); 


const fruits = ['apple', 'banana', 'cherry', 'grape', 'orange'];

// Get the div element where the fruit list will be added
const fruitListDiv = document.getElementById('fruit-list');

// Create a table element
const table = document.createElement('table');
table.style.borderCollapse = "collapse"; // Collapse borders

// Create table header row
const headerRow = document.createElement('tr');

// Create table header for image column
const imgHeader = document.createElement('th');
imgHeader.textContent = 'Image';
imgHeader.style.border = "1px solid #ddd"; // Add border
imgHeader.style.padding = "8px"; // Add padding
headerRow.appendChild(imgHeader);

// Create table header for fruit column
const fruitHeader = document.createElement('th');
fruitHeader.textContent = 'Fruit';
fruitHeader.style.border = "1px solid #ddd"; // Add border
fruitHeader.style.padding = "8px"; // Add padding
headerRow.appendChild(fruitHeader);

// Append the header row to the table
table.appendChild(headerRow);

// Loop through each fruit in the array
for (let i = 0; i < fruits.length; i++) {
    // Create a table row for each fruit
    const row = document.createElement('tr');

    // Create table data cell for image
    const imgCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = `assets/${fruits[i]}.jpg`; // Make sure the image path is correct
    img.alt = fruits[i];
    img.style.width = "100px"; // Set image width
    img.style.height = "100px"; // Set image height
    imgCell.appendChild(img);
    imgCell.style.border = "1px solid #ddd"; // Add border
    imgCell.style.padding = "8px"; // Add padding

    // Create table data cell for fruit name
    const fruitCell = document.createElement('td');
    fruitCell.textContent = fruits[i];
    fruitCell.style.border = "1px solid #ddd"; // Add border
    fruitCell.style.padding = "8px"; // Add padding

    // Append image cell and fruit cell to the row
    row.appendChild(imgCell);
    row.appendChild(fruitCell);

    // Append the row to the table
    table.appendChild(row);
}

// Append the table to the fruitListDiv
fruitListDiv.appendChild(table);
