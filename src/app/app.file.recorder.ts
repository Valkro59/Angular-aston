import { Recorder } from "./app.recorder";

export class File implements Recorder {
    save(text: string) {
        console.log('File save: ' + text);
    }
}