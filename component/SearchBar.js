import React from 'react'

const SearchBar= ({})=> {
    handleSearch = event => {
        const profileUser = this.props.user.find(
            e => e.username === this.props.mainUser
          );
        const query = event.target.value;
        const results = this.props.user.filter(item => {
          return item.username.includes(query);
        });
        console.log(results);
        this.setState({ results: results });
      };
    return (
        <div>
            <input placeholder="Search" onChange={this.handleSearch} />
        <div>
          {this.state.results.map(e => {
            return <div>{e.username}
            </div>;
          })}
        </div>
        </div>
    )
}

export default SearchBar
