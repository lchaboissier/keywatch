import { ReactiveFormsModule } from "@angular/forms"

const score = {
    listScore : [
        {
            titre: "ID",
            column: "id",
            value: "id",
        },
        {
            titre: "Nom",
            column: "nom",
            value: "nom",
        },
        {
            titre: "Prénom",
            column: "prenom",
            value: "prenom",
        },
        {
            titre: "Vitesse",
            column: "vitesse",
            value: "vitesse",
        },
        {
            titre: "Temps",
            column: "temps",
            value: "temps",
        },
    ]
}

export class ModelScore {
    public getScoreModel(){
        return score;
    }
}
