class HashTable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
  
    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.size;
    }
  
    set(key, value) {
      const index = this.hash(key);
  
      if (!this.table[index]) {
        // Slot is empty, directly insert the key-value pair
        this.table[index] = { key, value };
      } else {
        // Collision occurred, use quadratic probing
        let i = 1;
        let newIndex = (index + i * i) % this.size;
  
        while (this.table[newIndex]) {
          // Slot is occupied, continue probing with quadratic function
          i++;
          newIndex = (index + i * i) % this.size;
        }
  
        // Found an empty slot, insert the key-value pair
        this.table[newIndex] = { key, value };
      }
    }
  
    get(key) {
      const index = this.hash(key);
      let i = 0;
  
      while (this.table[(index + i * i) % this.size]) {
        // Probing with quadratic function to find the key
        const currentIndex = (index + i * i) % this.size;
        if (this.table[currentIndex].key === key) {
          // Key found, return the corresponding value
          return this.table[currentIndex].value;
        }
        i++;
      }
  
      // Key not found
      return undefined;
    }
  }
  