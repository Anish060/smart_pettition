const express=require('express');
const mysql=require('mysql')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())
const db=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'test1'
    }
)
app.get("/u_info",(req,res)=>{
    const sql='SELECT * FROM a1_login';
    db.query(sql,(err,data)=>{
        if(err)return res.json(err);
        return res.json(data);
    })
})
app.get("/a_info",(req,res)=>{
    const sql='SELECT * FROM admin_login';
    db.query(sql,(err,data)=>{
        if(err)return res.json(err);
        return res.json(data);
    })
})
app.get("/mes",(req,res)=>{
    const sql='SELECT * FROM a1_lo order by emo_val desc';
    db.query(sql,(err,data)=>{
        if(err)return res.json(err);
        return res.json(data);
    })
})

app.post("/sen", (req, res) => {
    const { contextt, issu,catt,name,emo } = req.body;  // ✅ Extract values correctly


    const sql = 'INSERT INTO a1_lo (Context, Issue,Category,username,emo_val) VALUES (?, ?,?,?,?)';  // ✅ Use (?, ?)
    db.query(sql, [contextt, issu,catt,name,emo], (err, result) => {   // ✅ Use correct format
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: err.message });
        }
        return res.status(201).json({ message: "Inserted successfully", result });
    });
});
app.post("/senA", (req, res) => {
    const { ID,status } = req.body;  // ✅ Use "ID"

    console.log("Received ID:", ID); // ✅ Debugging

    if (!ID) {
        return res.status(400).json({ error: "ID is required" });
    }

    const sql = "UPDATE a1_lo SET status=? WHERE ID=?";
    db.query(sql, [status,ID], (err, result) => {
        if (err) {
            console.error("Error updating data:", err);
            return res.status(500).json({ error: err.message });
        }

        console.log("Affected Rows:", result.affectedRows); // ✅ Debugging

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "No record found with the given ID" });
        }

        return res.status(200).json({ message: "Updated successfully", result });
    });
});
app.post("/senR", (req, res) => {
    const { ID,status } = req.body;  // ✅ Use "ID"

    console.log("Received ID:", ID); // ✅ Debugging

    if (!ID) {
        return res.status(400).json({ error: "ID is required" });
    }

    const sql = "UPDATE a1_lo SET status=? WHERE ID=?";
    db.query(sql, [status,ID], (err, result) => {
        if (err) {
            console.error("Error updating data:", err);
            return res.status(500).json({ error: err.message });
        }

        console.log("Affected Rows:", result.affectedRows); // ✅ Debugging

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "No record found with the given ID" });
        }

        return res.status(200).json({ message: "Updated successfully", result });
    });
});

app.listen(8081,()=>{
    console.log("listening");
})