import React from 'react';

class QuoteTile extends React.Component {
  
    _isMounted = false;
  
    constructor() {
      super();
      this.state = ({
        data: []
      })
    };
  
  
    componentDidMount() {
  
      this._isMounted = true;
      const itemReviewURL = ('http://localhost:4200/api/item_reviews/1')
  
      fetch(itemReviewURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
          if (this._isMounted) {
            this.setState({
              data: data
            })
          }
        })
        .catch(err => {
          console.log(err);
        })
    };
  

    render() {
        console.log(this.state.data)
        if (this.state.data !== '') {
            return (
                <div>
                    {this.state.data.map((item, index) => {
                        return (
                            <div key={item.item_review_id} value="item_review_id">
                    <p className="quote-text">{item.item_review_review}</p>
                        <p>{item.item_review_reviewer_name}</p>
                            </div>
                        )
                    })}
                </div>
            )

        }
        else {
            return null;
        }
    };




  
    componentWillUnmount() {
      this._isMounted = false;
    };
};


export default QuoteTile;
  