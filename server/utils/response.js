const success = (req, res, body) => {
  res.status(200).json(body)
}

const paging = (req, res, result) => {
  res.set({
    'X-Total-Count': result.total
  })
  success(req, res, result.rows)
}

const created = (req, res, body) => {
  res.status(201).json(body || 'created');
}

const deleted = (req, res, body) => {
  res.status(201).json(body || 'deleted');
}

const modified = (req, res, body) => {
  res.status(201).json(body || 'modified');
}

const error = (req, res, body) => {
  if (body == null || body == undefined) {
    res.status(500).json('error');
  } else if (body.message) {
    res.status(500).json(body.message);
  } else {
    res.status(500).json(body)
  }
}

const duplicated = (req, res, message) => {
  res.status(409).json(message)
}

const notFound = (req, res, message) => {
  res.status(404).json(message)
}

export default {
  success,
  paging,
  created,
  deleted,
  modified,
  error,
  duplicated,
  notFound
}

export {
  success,
  paging,
  created,
  deleted,
  modified,
  error,
  duplicated,
  notFound
}
