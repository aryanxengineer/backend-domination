const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  res.send("Hello this is my first fs module page");
});

// Callback APIs
// create file
app.get("/create", (req, res) => {
  fs.writeFile(
    `./files/${"file1.txt"}`,
    "Hello this is my first file",
    (err) => {
      if (err) res.send(err);
      else res.send("File created");
    }
  );
});

// Read file
app.get("/read", (req, res) => {
  fs.readFile(`./files/file.txt`, "utf-8", (data, err) => {
    if (err) res.send(err);
    else res.send(data);
  });
});

// Append file
app.get("/append", (req, res) => {
  fs.appendFile(
    `./files/file1.txt`,
    ", Now I have appended this text.",
    (err) => {
      if (err) res.send(err);
      else res.redirect("/read");
    }
  );
});

// Rename file
app.get("/rename", (req, res) => {
  fs.rename(`./files/file1.txt`, `./files/file.txt`, (err) => {
    if (err) res.send(err);
    else res.redirect("/read");
  });
});

// Delete file
app.get("/delete", (req, res) => {
  fs.unlink(`./files/file.txt`, (err) => {
    if (err) res.send(err);
    else res.redirect("/");
  });
});

//  Working with folders
//  Create folder
app.get('/create-folder', (req, res) => {
    fs.mkdir('safeFiles', (err) => {
        if(err) res.send(err);
        else res.send('folder is created');
    })
})

//  Read folder
app.get('/read-folder', (req, res) => {
    fs.readdir('safeFiles', {withFileTypes: true}, (files, err) => {
        if(err) res.send(err);
        else res.send(files);
    })
})

//  Delete folder
app.get('/delete-folder', (req, res) => {
    fs.rm('safeFiles', {recursive: true}, (err) => {
        if(err) res.send(err);
        else res.redirect('/');
    })
})

// Syncronous APIs
app.get('/create-sync-folder', (req, res) => {
  fs.mkdirSync('syncFiles', {recursive: true});
  fs.writeFileSync(`./syncFiles/first.txt`, "This is syncronous file");
  res.send('File inside folder is created');
})

app.listen(3000, () => {
  console.log("Server is running on port $3000");
});
