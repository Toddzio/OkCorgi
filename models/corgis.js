var corgiSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: int, required: true, unique: true },
  dogtag: String,
  image: String,
  pawUp: boolean,
  pawDown: boolean,
  created_at: Date,
  updated_at: Date
});


var corgi = mongoose.model('corgis', corgiSchema);

// Make this available to our other files
module.exports = corgi;
