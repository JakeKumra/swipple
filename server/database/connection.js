const e = require('express');
const {MongoClient} = require('mongodb');

async function main(){

    const uri = "mongodb+srv://jakekumra:laxmib@cluster0.ayh3yk7.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    // CRUD functions here
    await deleteBeverageByName(client, "Glens Whiskey")

    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function findOneBeverageByName(client, nameOfBeverage) {
    const result = await client.db("alcohol").collection("alcohol").findOne({ name: nameOfBeverage })
    
    if (result){
       console.log(`Found a beverage in the collection with the name '${nameOfBeverage}'`)
       console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`)
    }
}

async function findBeveragesOfTypeWineAndColorRed(client, {
    // = designated the default values if no argument is provided
    type = "spirit", 
    category = "gin", 
    maxNumOfResults = Number.MAX_SAFE_INTEGER
} = {}) // body of function below
{
    const cursor = client.db("alcohol").collection("alcohol").find(
        {
            type: type,
            category: category
        }
    )
    .limit(maxNumOfResults)
    const results = await cursor.toArray();

    if (results.length > 0) {
        console.log(`Found beverages of type ${type} and color ${category}.`)
        results.forEach(result => {
            console.log(result)
        })
    } else {
        console.log(`No beverages found of type ${type} and color ${category}.`);
    }
}

async function updateOneBeverageByName(client, documentName, updatedListing) {
    const result = await client.db("alcohol").collection("alcohol")
    .updateOne(
        {name: documentName}, 
        { $set: updatedListing }
    )

    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

async function createBeverage(client, newBeverage){
    const result = await client.db("alcohol").collection("alcohol").insertOne(newBeverage);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function createMultipleBeverages(client, newBeverages){
    // the newBeverage parameter is an array of objects
    const result = await client.db("alcohol").collection("alcohol").insertMany(newBeverages);

    console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
    console.log(result.insertedIds);       
}

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

// update or add a new document if doesn't exist
async function upsertBeverageByName(client, nameOfBeverage, updatedBeverage) {
    const result = await client.db("alcohol").collection("alcohol")
                        .updateOne({ name: nameOfBeverage }, 
                                   { $set: updatedBeverage }, 
                                   { upsert: true });
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);

    if (result.upsertedCount > 0) {
        console.log(`One document was inserted with the id ${result.upsertedId._id}`);
    } else {
        console.log(`${result.modifiedCount} document(s) was/were updated.`);
    }
}

async function updateAllBeveragesToHavePremium(client) {
    const result = await client.db("alcohol").collection("alcohol").updateMany(
        { premium: { $exists: false } }, 
        { $set: { premium: true } }
    )
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

async function deleteBeverageByName(client, nameOfBeverage) {
    const result = await client.db("alcohol").collection("alcohol")
            .deleteOne({ name: nameOfBeverage });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

async function deleteListingsScrapedBeforeDate(client, date) {
    const result = await client.db("alcohol").collection("alcohol")
        .deleteMany({ "last_scraped": { $lt: date } });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

main().catch(console.error);
