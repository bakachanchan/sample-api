const fs = require('fs');
const path = require('path');
const dataPath = path.join(appRoot, "data");
const dataList = {
	fruit: [],
	tree: [],
	flower: [],
	demon: [],
	coffee: [],
	cat: [],
	dog: [],
	country: []
};

Object.keys(dataList).forEach((key) => {
	const jsonData = fs.readFileSync(path.join(dataPath, key + ".json"));
	dataList[key] = JSON.parse(jsonData);
});

const data = {
	getAllData: function(type) {
		return dataList[type];
	},
	doCommand: function(command, type, data) {
		switch (command) {
			case "Insert":
				dataList[type].push(data);
				fs.writeFileSync(path.join(dataPath, type + '.json'), JSON.stringify(dataList[type]));
				return data + " inserted";
			break;
			case "Delete":
				dataList[type] = dataList[type].filter((dl) => {
					return dl != data;
				});
				fs.writeFileSync(path.join(dataPath, type + '.json'), JSON.stringify(dataList[type]));
				return data + " deleted";
			break;
			default:
				return "Command not found";
		}
	},
	doUpload: function(command, type, data) {
		let msg = "";
		switch (command) {
			case "Insert":
				data.forEach((d) => {
					dataList[type].push(d);				
					msg += d + " inserted" + "\n";
				});
				fs.writeFileSync(path.join(dataPath, type + '.json'), JSON.stringify(dataList[type]));
				return msg;
			break;
			case "Delete":
				data.forEach((d) => {
					dataList[type] = dataList[type].filter((dl) => {
						return dl != d;
					});
					msg += d + " deleted" + "\n";
				});
				fs.writeFileSync(path.join(dataPath, type + '.json'), JSON.stringify(dataList[type]));
				return msg;
			break;
			default:
				return "Command not found";
		}		
	}
}

module.exports = data;
