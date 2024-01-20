export const collection = [
    {
        name : 'john doe',
        email : 'john@gmail.com',
        mobile : '9563636721',
        totalToPay : 750,       //(150 + 450) , 

        splitGroups: [
            {
                createdBy : 'Alex',   //Split created user  (this field should automcatically created by app with loggedInuser data from slice who is responsible for creating)
                subject : 'Movie Expense', //Reason for split
                totalAmount : 450,
                selectedUsers : ['john doe' , 'Arun' , 'Alex'],   //created user who picks from user collection to involve in splitting including Alex who is loggedUser and creator of split (need to explicitly add creator from loggedUser slice)
                balance : 150,    //The split expense assinged to john doe (This field and value should automatically calculated by app when creater user submists split form)
            },

            {
                createdBy : 'Sarah',
                subject : 'Shopping',
                totalAmount : 1200,
                selectedUsers : ['john doe' , 'sarah'],
                balance : 600
            }
        ]
    }
]

export const splitCollection = [
    {
        createdBy : 'Alex',   //Split created user  (this field should automcatically created by app with loggedInuser data from slice who is responsible for creating)
        subject : 'Movie Expense', //Reason for split
        totalAmount : 450,
        selectedUsers : ['john doe' , 'Arun' , 'Alex'],   //created user who picks from user collection to involve in splitting including Alex who is loggedUser and creator of split (need to explicitly add creator from loggedUser slice)
        balance : 150, 
    }, 

    {
        createdBy : 'Sarah',
        subject : 'Shopping',
        totalAmount : 1200,
        selectedUsers : ['john doe' , 'sarah'],
        balance : 600
    }
]