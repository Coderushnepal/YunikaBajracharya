// here, operations of sending and receiving data takes place

import diskDb from 'diskdb';

class Stock {
    constructor() {
        this.filename = 'stocks';
        this.db = diskDb.connect('src/db', [this.filename]);
    }

    find (params) {
        return this.db[this.filename].findOne(params);
    }

    post(data) {
        return this.db[this.filename].save(data);
    }

    getAll() {
        return this.db[this.filename].find();
    }

    getById(id) {
        return this.db[this.filename].findOne({ _id: id });
    }

    updateById(id, data) {
        return this.db.stocks.update({_id: id}, data);
    }

    delete(id) {
        return this.db[this.filename].remove({ _id: id });
    }
}

export default Stock;