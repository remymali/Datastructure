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
      // Collision occurred, use linear probing
      let newIndex = (index + 1) % this.size;

      while (this.table[newIndex]) {
        // Slot is occupied, continue probing linearly
        newIndex = (newIndex + 1) % this.size;
      }

      // Found an empty slot, insert the key-value pair
      this.table[newIndex] = { key, value };
      
    }
  }

  get(key) {
    const index = this.hash(key);
    let currentIndex = index;

    while (this.table[currentIndex]) {
      if (this.table[currentIndex].key === key) {
        // Key found, return the corresponding value
        return this.table[currentIndex].value;
      }
      currentIndex = (currentIndex + 1) % this.size;
      if (currentIndex === index) {
        // Reached back to the original index, key not found
        break;
      }
    }

    // Key not found
    return undefined;
  }
}
