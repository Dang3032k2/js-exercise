// Bài 1.
// 	Viết code, một dòng cho mỗi yêu cầu sau:

// 	Tạo một đối tượng User trống.
// 	Thêm thuộc tính name với giá trị Hoang.
// 	Thêm thuộc tính surname với giá trị Viet.
// 	Thay đổi giá trị của name thành Bui.
// 	Xóa thuộc tính name khỏi đối tượng.
console.log("\nBai 1");
const user = {};
user.name = "Hoang";
user.surname = "Viet";
user.name = "Bui";
delete user.name;
console.log("user", user);

// Bài 2.
// 	let salaries = {
// 	  Bui: 1200,
// 	  Viet: 1600,
// 	  Hoang: 1350
// 	}

// 	Viết code để tính tổng tất cả các khoản lương và lưu trữ trong biến tổng.
console.log("\nBai 2");
const salaries = {
  Bui: 1200,
  Viet: 1600,
  Hoang: 1350,
};
let sum = 0;
for (key in salaries) {
  sum += salaries[key];
}
console.log("sum:", sum);
// Bài 3.
// 	[Input]:
// 	let menu = {
// 	  width: 200,
// 	  height: 300,
// 	  name: "Bui Viet Hoang"
// 	};

// 	Tạo function multiplyNumeric(obj) nhân tất cả các thuộc tính số của object menu với 2.

// 	[Output]:
// 	menu = {
// 	  width: 400,
// 	  height: 600,
// 	  name: "Bui Viet Hoang"
// 	};
console.log("\nBai 3");
const menu = {
  width: 200,
  height: 300,
  name: "Bui Viet Hoang",
};
const multiplyNumeric = (obj) => {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
};
multiplyNumeric(menu);
console.log("menu:", menu);
// Bài 4.
// 	Tạo mảng có tên là styles với các mục “Jazz” và “Blues”.
// 	Thêm “Rock-n-Roll” vào cuối.
// 	Thay thế giá trị ở giữa bằng “Classics”. Code để tìm giá trị giữa sẽ hoạt động với bất kỳ mảng nào có độ dài lẻ.
// 	Tách giá trị đầu tiên của mảng và hiển thị nó.
// 	Thêm trước Rap và Reggae vào mảng.

// 	[Output]:
// 	Jazz, Blues
// 	Jazz, Blues, Rock-n-Roll
// 	Jazz, Classics, Rock-n-Roll
// 	Classics, Rock-n-Roll
// 	Rap, Reggae, Classics, Rock-n-Roll
console.log("\nBai 4");
const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log("styles:", styles);
const length = styles.length;
if (length % 2 !== 0) {
  styles.splice((length - 1) / 2, 1, "Classics");
}
console.log("styles after change center element:", styles);
styles.shift();
console.log("styles after remove first element:", styles);
styles.unshift("Rap", "Reggae");
console.log(
  "styles after add 2 elements to the beginning of the array:",
  styles
);

// Bài 5.
// 	Viết hàm camelize(str) để thay đổi các từ được phân tách bằng dấu gạch ngang như “my-short-string” thành “myShortString” được viết bằng camel.

// 	[Output]:
// 	camelize("background-color") == 'backgroundColor';
// 	camelize("list-style-image") == 'listStyleImage';
// 	camelize("-webkit-transition") == 'WebkitTransition';
console.log("\nBai 5");
const camelize = (str) => {
  const values = str.split("-");
  return values.reduce(
    (camelizedStr, currentValue) =>
      camelizedStr +
      currentValue.charAt(0).toUpperCase() +
      currentValue.slice(1)
  );
};
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// Bài 6.
// 	Viết một hàm filterRangeInPlace(arr, a, b) lấy một mảng arr và loại bỏ khỏi nó tất cả các giá trị ngoại trừ những giá trị nằm giữa a và b. Nghiệm là: a ≤ arr[i] ≤ b.

console.log("\nBai 6");
const filterRangeInPlace = (arr, a, b) => {
  return arr.sort().slice(arr.indexOf(a), arr.indexOf(b) + 1);
};
const arr = [1, 2, 3, 4, 5, 8, 10, 0, 7];
console.log(filterRangeInPlace(arr, 4, 8));

// Bài 7.
// 	let initArray = [
// 		{ name: "Bui", age: 25 },
// 		{ name: "Viet", age: 26 },
// 		{ name: "Hoang", age: 27 },
// 		{ name: "Bui2" },
// 		{ age: 20 },
// 		{ name: "Hoang2", age: 18 }
// 	];

// 	Viết code chuyển đổi sang 1 mảng chỉ chứa name.

console.log("\nBai 7");
const initArray = [
  { name: "Bui", age: 25 },
  { name: "Viet", age: 26 },
  { name: "Hoang", age: 27 },
  { name: "Bui2" },
  { age: 20 },
  { name: "Hoang2", age: 18 },
];

const nameArray = initArray
  .filter((item) => item.name)
  .map((item) => (item.name ? item.name : ""));
console.log(nameArray);

// Bài 8.
// 	Cùng là mảng initArray ở bài 7.
// 	Viết function getAverageAge(arr) trả về tuổi trung bình.

console.log("\nBai 8");
const getAverageAge = (arr) => {
  let sumOfAge = 0;
  let count = 0;
  arr
    .filter((item) => item.age)
    .forEach((element) => {
      sumOfAge += element.age;
      count++;
    });
  return (sumOfAge / count).toFixed(2);
};
console.log("averageAge:", getAverageAge(initArray));

// Bài 9.
// 	let flattened = [[1, 2], [3, 4], [5, 6]];
// 	Viết function trả về mảng đã được làm phẳng.

// 	[Output]: [1, 2, 3, 4, 5, 6]

console.log("\nBai 9");
const flattened = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = (arr) => {
  return arr.reduce((flattenedArr, currentArr) => {
    currentArr.forEach((element) => flattenedArr.push(element));
    return flattenedArr;
  });
};
console.log("flattenedArray:", flattenedArray(flattened));

// Bài 10.
// 	Xây dựng chương trình có một ô input, một button. Sau khi nhập giá trị số vào ô input, click vào button thì in các số từ 1 tới giá trị của ô input ra màn hình. Nếu không nhập vào ô input, click button sẽ in số 1 + "Vui lòng nhập giá trị số vào ô input".

const input = document.getElementById("input");
const form = document.getElementById("form");
const resultMessage = document.getElementById("result");
const errorMessaage = document.getElementById("error-message");
const displayResult = (result, error) => {
  resultMessage.innerHTML = result;
  errorMessaage.innerHTML = error;
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = input.value;
  if (inputValue) {
    if (inputValue < 1) {
      displayResult("", "Vui lòng nhập giá trị lớn hơn 0");
    } else {
      let numberValues = "";
      for (let i = 1; i <= inputValue; i++) {
        numberValues += i + " ";
      }
      displayResult(numberValues, "");
    }
  } else {
    displayResult("1", "Vui lòng nhập giá trị số vào ô input");
  }
});

// Reduce

// Bài 1. Chunk array.
// 	[input]: [1, 2, 3, 4, 5];

// 	Chunk(arr, 2);
// 	[output]: [[1, 2], [3, 4], [5]];

console.log("\n\n JS Reduce");
console.log("\nBai 1");
const chunk = (arr, size) => {
  return arr.reduce((chunkArray, _, currentIndex) => {
    if (!chunkArray.length | (currentIndex % size === 0)) {
      chunkArray.push(arr.slice(currentIndex, currentIndex + size));
    }
    return chunkArray;
  }, []);
};
const input1 = [1, 2, 3, 4, 5];
const output = chunk(input1, 2);
console.log(output);

// Bài 2. Tìm phần tử khác nhau giữa 2 mảng.
// 	[input]: arr1 = [1, 2, 3, 4, 5];
// 			 arr2 = [2, 3, 6];

// 	Difference(arr1, arr2);
// 	[output]: [1, 4, 5];

console.log("\nBai 2");
const difference = (arr1, arr2) => {
  return arr1.reduce((resultArray, currentValue) => {
    if (!arr2.includes(currentValue)) {
      resultArray.push(currentValue);
    }
    return resultArray;
  }, []);
};
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];
console.log("output:", difference(arr1, arr2));

// Bài 3. Uniq array. Loại bỏ phần tử bị lặp.
// 	[input]: [2, 1, 0, 3, 2, 1, 2];
// 	[output]: [2, 1, 0, 3];

console.log("\nBai 3");
const input3 = [2, 1, 0, 3, 2, 1, 2];
const output3 = input3.reduce((uniqArray, currentValue) => {
  if (!uniqArray.includes(currentValue)) {
    uniqArray.push(currentValue);
  }
  return uniqArray;
}, []);
console.log("output:", output3);

// Bài 4. Đếm số lượng giống nhau trong một array.
// 	[input]: [0, 1, 1, 2, 2, 2];
// 	[outpu]: { 0: 1, 1: 2, 2: 3 };

console.log("\nBai 4");
const input4 = [0, 1, 1, 2, 2, 2];
const output4 = input4.reduce((countObj, currentValue) => {
  countObj[currentValue] = (countObj[currentValue] | 0) + 1;
  return countObj;
}, {});
console.log("output:", output4);
// Bài 5. Get max() và min()
// 	[input]: [12, 45, 21, 65, 38, 76, 108, 43];
// 	[output]: Max(arr); // 108
// 			  Min(arr); // 12

console.log("\nBai 5");
const max = (arr) => {
  return arr.reduce((maxValue, currentValue) => {
    return currentValue > maxValue ? currentValue : maxValue;
  });
};
const min = (arr) => {
  return arr.reduce((minValue, currentValue) => {
    return currentValue < minValue ? currentValue : minValue;
  });
};
const input5 = [12, 45, 21, 65, 38, 76, 108, 43];
console.log("max value:", max(input5));
console.log("min value:", min(input5));

// Bài 6. Group by.
// 	[input]: arr = [
// 			    { area: "GZ", name: "YZW", age: 27 },
// 			    { area: "GZ", name: "TYJ", age: 25 },
// 			    { area: "SZ", name: "AAA", age: 23 },
// 			    { area: "FS", name: "BBB", age: 21 },
// 			    { area: "SZ", name: "CCC", age: 19 }
// 			];
// 	[output]: Group(arr, "area"); // { GZ: Array(2), SZ: Array(2), FS: Array(1) }.

console.log("\nBai 6");
const group = (arr, property) => {
  return arr.reduce((groupedObj, currentObj) => {
    const key = currentObj[property];
    if (!groupedObj[key]) {
      groupedObj[key] = [currentObj];
    } else {
      groupedObj[key].push(currentObj);
    }
    return groupedObj;
  }, {});
};
const arr10 = [
  { area: "GZ", name: "YZW", age: 27 },
  { area: "GZ", name: "TYJ", age: 25 },
  { area: "SZ", name: "AAA", age: 23 },
  { area: "FS", name: "BBB", age: 21 },
  { area: "SZ", name: "CCC", age: 19 },
];
console.log("output:", group(arr10, "area"));
