// @desc    Get all bootcamps
// @route   GET /ap/v1/bootcamps
// @access  Public
exports.getBootcamps = (res, req) => {
    res.status(200).json({ success: true, msg: 'show all bootcamps' })
}


// @desc    Get single bootcamp
// @route   GET /ap/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (res, req) => {
    res.status(200).json({ success: true, msg: `get bootcamp ${req.params.id}` })
}


// @desc    Create new bootcamp
// @route   POST /ap/v1/bootcamps
// @access  Private
exports.createBootcamp = (res, req) => {
    res.status(200).json({ success: true, msg: 'create new bootcamp' })
}

// @desc    Update bootcamp
// @route   PUT /ap/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (res, req) => {
    res.status(200).json({ success: true, msg: `update bootcamp ${req.params.id}` })
}

// @desc    Delete bootcamp
// @route   Delete /ap/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (res, req) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` })
}