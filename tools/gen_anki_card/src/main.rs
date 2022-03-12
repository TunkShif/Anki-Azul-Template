use genanki_rs::{Deck, Field, Model, Note, Template};
use std::{collections::HashMap, error::Error, fs, io};

#[derive(Debug)]
struct Card {
    name: String,
    front: String,
    back: String,
    data: HashMap<String, Option<String>>,
}

fn get_cards() -> Result<Vec<Card>, Box<dyn Error>> {
    let paths = fs::read_dir("./templates")?;
    let mut templates: Vec<Card> = Vec::new();
    for path in paths {
        let path = path?.path();
        let path = path.as_path();

        let name = path.file_stem().unwrap().to_str().unwrap().to_owned();
        let front = fs::read_to_string(path.join("front.html"))?;
        let back = fs::read_to_string(path.join("back.html"))?;
        let data = fs::read_to_string(path.join("data.json"))?;
        let data: HashMap<String, Option<String>> = serde_json::from_str(&data)?;
        templates.push(Card {
            name,
            front,
            back,
            data,
        })
    }
    Ok(templates)
}

fn get_style() -> io::Result<String> {
    fs::read_to_string("./output/style.css")
}

fn main() -> Result<(), Box<dyn Error>> {
    let style = get_style()?;
    let cards = get_cards()?;

    let base_id = 1930581141;

    let mut deck = Deck::new(
        base_id,
        "Anki Azul Templates",
        "Examples for anki azul templates",
    );

    for (i, card) in cards.iter().enumerate() {
        let fields: Vec<Field> = card
            .data
            .iter()
            .map(|(field, _val)| Field::new(field))
            .collect();

        let values: Vec<&str> = card
            .data
            .iter()
            .map(|(_field, val)| match val {
                Some(text) => text,
                _ => "",
            })
            .collect();

        let template = Template::new("Card 1").qfmt(&card.front).afmt(&card.back);

        let model = Model::new_with_options(
            base_id + i + 1,
            &card.name,
            fields,
            vec![template],
            Some(&style),
            None,
            None,
            None,
            None,
        );

        let note = Note::new(model, values)?;
        deck.add_note(note);
    }

    deck.write_to_file("./output/collections.apkg")?;

    Ok(())
}
