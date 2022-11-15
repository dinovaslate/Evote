class ListNode{
    constructor(char) {
        this.val = char;
        this.next = [];
    }
}

class LinkedList{
    #head = [];
    #link(prev, next, level) {
        prev.next[level] = next;
    }
    /* Readibility Purpose */
    #unlink(prev, next, level) {
        prev.next[level] = null;
    }
    #randomBool() {
        return Math.random() < 0.5;
    }
    #pushLevel() {
        
    }
    push(char) {
        const node = new ListNode(char);
        if (this.#head.length === 0) {
        }
        let currentLevel = this.#head.length - 1;
        let currentList = new Array(this.#head.length);
        while (currentLevel >= 0) {
            let comparator = (currentList[currentLevel]) ? currentList[currentLevel].next[currentLevel] : this.#head[currentLevel];
            if (!comparator) comparator = { val: Number.MAX_SAFE_INTEGER };
            if (comparator.val < char) {
                currentList[currentLevel] = comparator;
                continue;
            }
            currentLevel--
        }
    }
}