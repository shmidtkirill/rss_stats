module.exports = React.createClass({
    displayName: "StoryContent",
    getInitialState: function () {
        return {
            text: this.props.text
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            text: nextProps.text
        });
    },
    insertHMTL: function () {
        return {
            __html: this.state.text
        }
    },
    render: function () {
        if (this.state.text != "") {
            return <div className="boxContent" id="storyBoxContent">
        <div id="storyText" dangerouslySetInnerHTML={this.insertHMTL()}></div>
        </div>;
    } else {
        return <div className="boxContent" id="storyBoxContent">
        <div className="nodata">No data</div>
        </div>;
    }
    }
});
