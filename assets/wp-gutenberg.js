
import './index.css'
wp.blocks.registerBlockType( 'gutenberg/wp-gutenberg', {
    title: wp.i18n.__( 'Company contact information' ),
    description: wp.i18n.__( 'this is simple company block.' ),
    icon: 'businessperson',
    category: 'design',

    attributes: {
        companyName: { type: 'string' },
        companyPhone: { type: 'string' },
        companyContact: { type: 'string' },
        companyAddress: { type: 'string' },
        companyCity: { type: 'string' }
    },

    edit: EditCompany,

    save: function ( props ) {

        return null;
    }
})

function EditCompany( props ) {
    function updateCompanyName(e) {
        props.setAttributes({ companyName: e.target.value })

        console.log(props.attributes.companyName)
    }

    function updateCompanyPhone(e) {
        props.setAttributes({ companyPhone: e.target.value })
    }

    return (
        <div className="makeUpYourBlockTypeName">
            <input type="text" value={props.attributes.companyName} onChange={updateCompanyName} placeholder="company name" />
            <input type="text" value={props.attributes.companyPhone} onChange={updateCompanyPhone} placeholder="company phone" />
        </div>
    )
}