const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "LIttle Red Corvette"]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    albumTitle: "ABBA Gold"
  }
};

const updateRecords = (records, id, prop, value) => {
  // if value is empty - delete
  if (value === "") {
    delete records[id][prop];

  // else if prop is "tracks" → ensure array exists → push value
  } else if (prop === "tracks") {
      if (!records[id]["tracks"]) {
        records[id]["tracks"] = [];
      }
    records[id]["tracks"].push(value);
  }

  // else → set property to value
  else {
    records[id][prop] = value;
  }
  return records;
}  







updateRecords(recordCollection, 5439, "artist", "ABBA");