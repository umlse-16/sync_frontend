/**
 * Client Side Sync adapter that persists and caches model data
 * for offline storage.
 * @param object must include the following { \
 *	localstorage: window.LocalStorage, // required in case we decide to no longer use localstorage at some point
 *  hostname: 'server.hostname'
 * }
 */
var SyncAdapter = function(params) {
	/** 
	 * Create a new entity, persist it to the database (if online), and cache it locally.
	 * Options include cacheOnly: boolean
	 *
	 * @param persistable model to persist, must have a serialize function that returns a JSON object
     * @param options list of optional arguments or undefined
     */
	this.create = function(persistable, options, cb) {
		options = options || {};
	};

	/**
	 * Update an entity in the cache and persist the updated copy to the database (if online)
	 * Options include 
	 * @param persistable model, must have a serialize function and a $id field
	 */
	this.update = function(persistable, options, cb) {
		options = options || {};
	};

    /**
     * Get an object by id
     * Options include cacheOnly: boolean (check cache only)
     * @param id the objects id
     */
	this.get = function(id, options, cb) {
		options = options || {};
	};

	// not guaranteed until we can find out if LocalStorage can do this
	// this.query = function(query) {
	// }

	/**
	 * Delete the entity from the cache and the remote database by id
	 * @param m the object's id or the object with a $id field
	 */
	this.del = function(m, cb) {
		var id = m;
		if(typeof m === 'string' || m instanceof String)
			m;
		id = m.$id;
	};

	// internal function that persists an object to LocalStorage
	this._persistLocal = function(object) {};
}

// dont know which module system if any we're gonna use yet
// can't compare to undefined directly as that'll return a ReferenceError
// for undeclared variables
if(typeof module !== 'undefined') {
	module.exports = SyncAdapter; // commonjs
} else if(typeof define !== 'undefined') { // requirejs
  define([], SyncAdapter);
} else {
	window.SyncAdapter = SyncAdapter;
}
