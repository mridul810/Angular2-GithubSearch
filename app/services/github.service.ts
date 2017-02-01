import {Injectable}  from '@angular/core';
import {Http, Header} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
	private username:string;
	private client_id = '75dd955c62d330098bca';
	private client_secret ='f0a3f071fd709b00e7ecaac2bb99d77ef4285853';

	constructor(private _http: Http){
		console.log('Github Service Ready...');
		this.username = 'a8m';
	}

	getUser(){
		return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
				.map(res => res.json());
	}

	getRepos(){
		return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
				.map(res => res.json());
	}

	updateUser(username:string){
		this.username = username;	
	}

}