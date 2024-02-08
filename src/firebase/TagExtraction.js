export default function giveKeywords(text) {
    text= text.toLowerCase()
    text = text.split(" ");
    const color_entities = ['white', 'red', 'green', 'grey', 'violet', 'brown', 'navy blue', 'lemon yellow',
        'amber', 'charcoal', 'olive', 'ruby', 'ivory', 'emerald', 'arctic blue',
        'brunette', 'black', 'yellow', 'sky blue', 'purple', 'magenta', 'pink',
        'turquoise', 'grape vine', 'sea green', 'bronze', 'cyan', 'azure', 'tangerine',
        'sapphire', 'pista green', 'mocha', 'orange', 'lime green', 'crimson',
        'mustard', 'coral', 'tan', 'lavender', 'indigo', 'dark green', 'cream', 'silver',
        'mint', 'cherry red', 'rosewood', 'coffee brown', 'ash', 'maroon', 'salmon',
        'aqua', 'peach', 'saffron', 'teal', 'beige', 'fuchsia', 'burgundy', 'mauve',
        'rust', 'pearl', 'garnet', 'lilac', 'umber', 'jet black']
    const clothes_entities = ['hoodie', 'shirt', 'dress', 'pants', 'jeans', 'jacket', 'shoes', 'hat', 'scarf',
        'gloves']
    const gender_entities = ['men', 'boy', 'women', 'girl', 'unisex']
    const extracted_entities = {
        "gender": text.filter((word) => {
            if (gender_entities.indexOf(word.toLowerCase())>-1) {
                return word;
            }
        }),
        "clothes": text.filter((word) => {
            if (clothes_entities.indexOf(word.toLowerCase())>-1) {
                return word;
            }
        }),
        "color":text.filter((word) => {
            if (color_entities.indexOf(word.toLowerCase())>-1) {
                return word;
            }
        }),
    }
    return Array(extracted_entities['gender'],extracted_entities['clothes'],extracted_entities['color']);
}
