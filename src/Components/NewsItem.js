import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } =
      this.props;

    if (!newsUrl) return null; // Handle missing newsUrl

    return (
      <div>
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://ambcrypto.com/wp-content/uploads/2024/12/Benjamin33-1000x600.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt={title || "News image"}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-success">
                By {!author ? "Unknown" : author} on {date}
              </small>
            </p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  newsUrl: PropTypes.string.isRequired,
  author: PropTypes.string,
  date: PropTypes.string.isRequired,
  source: PropTypes.string,
};

NewsItem.defaultProps = {
  description: "No description available",
  imageUrl: "",
  author: "Unknown",
  source: "N/A",
};

export default NewsItem;
