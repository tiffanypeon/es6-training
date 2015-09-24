// Parallel vs Async - 
// Parallel in terms of threaded programming - at the processor level, each CPU core is able
// to do one exact operation at any given instance and there is a queue of operations waiting to be handled. 
// The more cores we have, the more threads we can handle. 
// Javascript is single threaded - the javascript engine itself is multi-threaded (ie - browser)
// There is one thread that is handling the javascript execution itself
// We cannot have two callbacks firing at the exact same instant
// We don't have to deal w/ cooperative locking, resource sharing, 
// race conditions and all issues that come w/ threaded programming
// At any instant, only one function of our program can be running
// Concurrency - The best way to model multiple things going on at one time
// In any given slice of time, two or more high-level tasks are going on
// Interweaving the steps of two given tasks so that it feels to the user like the system is moving faster
// In JS this is called the 'event loop' <- a single thread in the system that picks each item off a list and executes it

// Try to split up macrolevel task into as many composable micro-level tasks as possible 
// How are we going to coordinate all of the concurrency? 

// Our responsibility is the coordinate - js doesn't know how to coordinate all of those pieces 
