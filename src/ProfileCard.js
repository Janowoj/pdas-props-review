function ProfileCard({ title, handle, image, description }) {
    // const title = props.title;
    // const handle = props.handle;

    // dectructuring is the feature of ES6: 
    // pulling off the properties from an object and assigning them to variables
    // const { title, handle } = props;

    // in proffessional projects we use destructuring, 
    // because we don't need to use all the props
    console.log(title, handle); // it is useful for debugging

    return (
        <div className="card columns">
            <div className="card column">
                <div className="card-image">
                    <figure className="image is-1by1">
                        <img src={image} alt="logo" />
                    </figure>
                </div>

                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{handle}</p>
                    </div>
                    <div className="content">{description}</div>
                </div>
            </div>
        </div>

    );
}

export default ProfileCard;

// To add style, we can use following ways:

// This is all done!  No changes needed!
// export default function BrightText({ color }) {
//   const style = { color: color };

  // You might see an error on this line from the code editor
  // There is no error, no changes are needed
//   return <h1 style={style}>Hi!</h1>
// }

// alt is used for accessibility purposes for screen readers, which convert content into audio. Without it we will get a warning!
// <img src={image} alt="logo" />