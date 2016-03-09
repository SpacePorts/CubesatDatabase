<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Component extends Model
{
   use \Venturecraft\Revisionable\RevisionableTrait;

	protected $revisionEnabled = true;
    protected $revisionCleanup = true; //Remove old revisions (works only when used with $historyLimit)
    protected $historyLimit = 500; //Maintain a maximum of 500 changes at any point of time, while cleaning up old revisions.
   
    public function getUrlAttribute()
    {
        return $this->attributes['url'] = url("/api/component/".$this->attributes['id']);
    }


   	public function satellites()
   	{
   		return $this->belongsToMany('App\Satellite', 'satellite_component');
   	}

    protected $appends = ['url'];
}