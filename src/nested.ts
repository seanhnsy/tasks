import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const pubOnly = questions.filter((pub: Question): boolean => pub.published);
    return pubOnly;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpty = questions.filter(
        (emp: Question): boolean =>
            !(emp.body === "") ||
            !(emp.expected === "") ||
            !(emp.options.length === 0)
    );
    return nonEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const foundIt = questions.filter(
        (look: Question): boolean => look.id === id
    );
    if (foundIt.length === 0) {
        return null;
    } else {
        return foundIt[0];
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const remQues = questions.filter(
        (rem: Question): boolean => !(rem.id === id)
    );
    return remQues;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const namesOnly = questions.map((names: Question): string => names.name);
    return namesOnly;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const addUp = questions.reduce(
        (currentTotal: number, num: Question) => currentTotal + num.points,
        0
    );
    return addUp;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const allPub = getPublishedQuestions(questions);
    const sumPub = sumPoints(allPub);
    return sumPub;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const stringReps = questions.map(
        (val: Question): string =>
            val.id.toString() +
            "," +
            val.name +
            "," +
            val.options.length.toString() +
            "," +
            val.points.toString() +
            "," +
            val.published.toString()
    );
    const finalStr = stringReps.join("\n");
    return "id,name,options,points,published" + "\n" + finalStr;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const ans = questions.map(
        (values: Question): Answer => ({
            questionId: values.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return ans;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const allPublish = questions.map(
        (here: Question): Question => ({ ...here, published: true })
    );
    return allPublish;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const checkType = questions.filter(
        (curr: Question): boolean => curr.type === "multiple_choice_question"
    );
    if (checkType.length === questions.length) {
        return true;
    } else if (checkType.length === 0) {
        return true;
    } else {
        return false;
    }
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQ = makeBlankQuestion(id, name, type);
    const newArr = [...questions, newQ];
    return newArr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const targetIndex = questions.findIndex(
        (check: Question): boolean => check.id === targetId
    );
    const renamed = [...questions];
    renamed[targetIndex] = { ...questions[targetIndex], name: newName };
    return renamed;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const newType = [...questions];
    if (newQuestionType !== "multiple_choice_question") {
        const targetIndex = questions.findIndex(
            (check: Question): boolean => check.id === targetId
        );
        newType[targetIndex] = {
            ...questions[targetIndex],
            type: newQuestionType,
            options: []
        };
    } else {
        const targetIndex = questions.findIndex(
            (check: Question): boolean => check.id === targetId
        );
        newType[targetIndex] = {
            ...questions[targetIndex],
            type: newQuestionType
        };
    }
    return newType;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    return questions.map((question: Question): Question => {
        if (question.id === targetId) {
            let newArr: string[];
            if (targetOptionIndex === -1) {
                newArr = [...question.options, newOption];
            } else {
                newArr = [...question.options];
                newArr.splice(targetOptionIndex, 1, newOption);
            }
            return { ...question, options: newArr };
        } else {
            return question;
        }
    });
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    return [];
}
