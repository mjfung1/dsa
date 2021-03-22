'1 -> 2 -> 3 -> 4 -> null' 
'null <- 1 <- 2 <- 3 <- 4'


const reverseLink = (head) => {
    let prev = null;
    let on = head;

    while(on) {
        let temp = on.next;  
        on.next = prev;     
        prev = on; 
        on = temp;          
        
    }

    return on;
};