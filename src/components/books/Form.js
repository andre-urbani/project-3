import React from 'react'
import { withRouter } from 'react-router-dom'

const Form = ({ handleChange, handleSubmit, data, errors }) => {
  return (
    <section className="section">
      <div className="container is-fluid">
        <div className="formBox">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Author</label>
              <div className="control">
                <input
                  className="input"
                  name="author"
                  placeholder="eg: The Kinks"
                  onChange={handleChange}
                  value={data.author || ''}
                />
              </div>
              {errors.author && <div className="help is-danger">{errors.author}</div>}
            </div>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  className="input"
                  name="title"
                  placeholder="eg: The Kinks are the Village Green Preservation Society"
                  onChange={handleChange}
                  value={data.title || ''}
                />
              </div>
              {errors.title && <div className="help is-danger">{errors.title}</div>}
            </div>
            <div className="field">
              <label className="label">Image</label>
              <div className="control">

                <input
                  className="input"
                  name="image"
                  placeholder="eg: https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/theKinks.jpg"
                  onChange={handleChange}
                  value={data.image || ''}
                />
              </div>
              {errors.image && <div className="help is-danger">{errors.image}</div>}
            </div>
            <div className="field">
              <label className="label">Release Year</label>
              <div className="control">
                <input
                  className="input"
                  name="releaseYear"
                  onChange={handleChange}
                  value={data.releaseYear || ''}
                />
              </div>
              {errors.releaseYear && <div className="help is-danger">{errors.releaseYear}</div>}
            </div>
            <div className="field">
              <label className="label">Genre</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    name="genre"
                    onChange={handleChange}
                    value={data.genre || ''}
                  >
                    <option value="" disabled>Please choose...</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Romance">Romance</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Horror">Horror</option>
                    <option value="ScienceFiction">ScienceFiction</option>
                    <option value="Cookings">Cooking</option>
                    <option value="Art">Art</option>
                    <option value="History">History</option>
                    <option value="Travel">Travel</option>
                    <option value="Motivational">Motivational</option>
                    <option value="Biography">Biography</option>
                    <option value="Nonfiction">Nonfiction</option>
                  </select>
                </div>
                {errors.genre && <div className="help is-danger">{errors.genre}</div>}
              </div>
            </div>
            <div className="field">
              <label className="label">Pages</label>
              <div className="control">
                <input
                  className="input"
                  name="pg"
                  placeholder="eg: 45:33"
                  onChange={handleChange}
                  value={data.pg || ''}
                />
              </div>
              {errors.pg && <div className="help is-danger">{errors.pg}</div>}
            </div>
            <div className="field">
              <label className="label">Label</label>
              <div className="control">
                <input
                  className="input"
                  name="label"
                  placeholder="eg: Pye"
                  onChange={handleChange}
                  value={data.label || ''}
                />
              </div>
              {errors.label && <div className="help is-danger">{errors.label}</div>}
            </div>
            <div className="field">
              <label className="label">ISBN</label>
              <div className="control">
                <input
                  className="input"
                  name="isbn"
                  onChange={handleChange}
                  value={data.isbn || ''}
                />
              </div>
              {errors.isbn && <div className="help is-danger">{errors.isbn}</div>}
            </div>
            <button className="button is-dark">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default withRouter(Form)
