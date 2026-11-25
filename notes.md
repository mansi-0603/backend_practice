Backend ka kaam kya hai?

Restaurant socho:
Client (Postman / React app) = customer, jo order deta hai
Server (tumhara Express code) = kitchen, jo order leke kaam karta hai
Route = menu ka ek item, jaise "burger", "pizza"
Response = jo customer ko wapas milta hai


Route = URL ka address + method
Route ka matlab hai: "Jab koi is address pe is method se aaye, to server kya karega."

```js
app.post("/note", (req, res) => {
    // yahan kaam hota hai
});

```

Part	                 Kya hai	                 Matlab
app.post	             Method	                 POST request ke liye
"/note"	                   Path	                 URL ka address
(req, res) => {...}	     Handler function	    wo kaam jo server karega


Jitne app.get / app.post / app.delete hain, utne routes hain

req.query --> use krte h filter ke liye ---> like url mei ---> ?name=mansi&greet=hii agr likha hoga

const note = [] --> ye ek mini db ke trh kaam kr rha h or jaise hie server restart hoga saara notes gayab ho jayega


delete.note(index) ---> isey note delete ho rhi thi lekin uske jagah prr nulll dikh rha tha means memory se content udh rha tha lekin dusra notes ka position joh previous that wahi prr tha or bich mei ek khali jagah reh jaa rhi thi 

toh isko remove krne ke liye we use splice.

```js
note.splice(index, 1)
```
Yaad hai na: index = kahan se shuru karna hai, 1 = kitne hatane hain.