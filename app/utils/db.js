import Ember from 'ember';
export default Ember.Object.create({

  _records: [
    { title: "El Mono" },
    { title: "3R in Berlin"},
    { title: "How to be a Pope"}
  ],

  books() {
    return Ember.copy(this._records);
  },

  addBooks(book) {
    this._records.push(book);
  },

  removeBook(book) {
    const index = this._records.indexOf(book);
    this._records.splice(index, 1);
  }
});
