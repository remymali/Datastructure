class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
  
  class HashTable {
    constructor(size) {
      this.size = size;
      this.table = new Array(size);
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    set(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
        this.table[index] = new Node(key, value);
      } else {
        let currentNode = this.table[index];
        while (currentNode.next) {
          if (currentNode.key === key) {
            // Key already exists, update the value
            currentNode.value = value;
            return;
          }
          currentNode = currentNode.next;
        }
        currentNode.next = new Node(key, value);
      }
    }
  
    get(key) {
      const index = this.hash(key);
      if (!this.table[index]) {
        return undefined;
      }
      let currentNode = this.table[index];
      while (currentNode) {
        if (currentNode.key === key) {
          return currentNode.value;
        }
        currentNode = currentNode.next;
      }
      return undefined;
    }
  
    remove(key) {
      const index = this.hash(key);
      if (!this.table[index]) {
        return;
      }
      let currentNode = this.table[index];
      if (currentNode.key === key) {
        // If the first node matches the key, remove it
        this.table[index] = currentNode.next;
        return;
      }
      let prevNode = currentNode;
      currentNode = currentNode.next;
      while (currentNode) {
        if (currentNode.key === key) {
          

          prevNode.next = currentNode.next;
          return;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  
    display() {
      for (let i = 0; i < this.size; i++) {
        let currentNode = this.table[i];
        if (currentNode) {
          console.log(`Index ${i}:`);
          while (currentNode) {
            console.log(`  ${currentNode.key}: ${currentNode.value}`);
            currentNode = currentNode.next;
          }
        }
      }
    }
  }
  
  // Example usage:
  const hashTable = new HashTable(5);
  hashTable.set("name", "John");
  hashTable.set("age", 25);
  hashTable.set("city", "New York");
  hashTable.set("occupation", "Developer");
  hashTable.set("hobby", "Gardening");
  
  console.log("Getting values:");
  console.log("Name:", hashTable.get("name")); // John
  console.log("Age:", hashTable.get("age")); // 25
  console.log("City:", hashTable.get("city")); // New York
  console.log("Occupation:", hashTable.get("occupation")); // Developer
  console.log("Hobby:", hashTable.get("hobby")); // Gardening
  
  console.log("\nHash table contents:");
  hashTable.display();
  
  console.log("\nRemoving 'age' key:");
  hashTable.remove("age");
  console.log("Age:", hashTable.get("age")); // undefined
  
  console.log("\nUpdated hash table contents:");
  hashTable.display();