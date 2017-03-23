import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
    private baseUrl : string = '/api/';

    constructor(private http:Http){
    }

    getTasks() {
        return this.http.get(this.baseUrl +'tasks')
            .map(res => res.json());
    }

    addTask(newTask) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'task', JSON.stringify(newTask), {headers: headers})
            .map(res => res.json());
    }

    deleteTask(task){
        return this.http.delete(this.baseUrl + 'task/' + task._id)
            .map(res => res.json());
    }

    updateStatus(task) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + 'task/' + task._id, JSON.stringify(task), {headers: headers})
            .map(res => res.json());
        
    }
}