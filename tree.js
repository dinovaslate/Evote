class TreeNode{
    constructor(char) {
        this.val = char;
        this.rightChild = null;
        this.leftChild = null;
        this.rightHeight = 0;
        this.leftHeight = 0;
    }
}

class Tree{
    #root = null;
    get root() {
        return this.#root;
    }
    #rotateLeft(node) {
        let temp = node.rightChild;
        node.rightChild = temp.leftChild;
        temp.leftChild = node;
        temp.leftHeight++;
        node.rightHeight -= 2;
        if (this.#root === node) this.#root = temp;
        return temp;
    }
    #rotateRight(node) {
        let temp = node.leftChild;
        node.leftChild = temp.rightChild;
        temp.rightChild = node;
        temp.rightHeight++;
        node.leftHeight -= 2;
        if (this.#root === node) this.#root = temp;
        return temp;
    }
    push(char, prop = null, obj = {}) {
        if (this.#root === null) {
            const node = new TreeNode(char);
            this.#root = node;
            return;
        }
        if (prop && !obj[prop]) {
            const node = new TreeNode(char);
            obj[prop] = node;
            return 1;
        }
        let current = obj[prop] ?? this.#root;
        if (current.val === char) return;
        if (char < current.val) {
            current.leftHeight = this.push(char, "leftChild", current);
            if ((current.rightHeight - current.leftHeight) < -1) {
                let ret = this.#rotateRight(current);
                if (current !== this.#root) obj[prop] = ret;
                current = obj[prop];
            }
            return current.leftHeight + 1;
        }
        current.rightHeight = this.push(char, "rightChild", current);
        if (current.rightHeight - current.leftHeight > 1) {
            let ret = this.#rotateLeft(current);   
            if (current !== this.#root) obj[prop] = ret;
            current = obj[prop];
        }
        return current.rightHeight + 1;
    }
}

const tree = new Tree();
tree.push(33);
tree.push(13);
tree.push(53);
tree.push(11);
tree.push(21);
tree.push(61);
tree.push(9);
tree.push(8);
console.log(tree.root);